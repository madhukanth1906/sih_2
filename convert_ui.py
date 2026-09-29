import os
import re
from bs4 import BeautifulSoup

PAGES = {
    "ocean_explorer": "OceanExplorer",
    "subsurface_temperature_reconstruction": "TemperatureReconstruction",
    "vertical_temperature_profiles": "VerticalProfiles",
    "ocean_intelligence_overview": "Overview"
}

BASE_DIR = "G:/sih_2"
UI_DIR = f"{BASE_DIR}/ui/stitch_oceanembed_ocean_intelligence_platform"
FRONTEND_DIR = f"{BASE_DIR}/frontend/src/pages"

def convert_html_to_jsx(html_content):
    # Use BeautifulSoup to extract the main content
    soup = BeautifulSoup(html_content, "html.parser")
    main_tag = soup.find("main")
    if not main_tag:
        return "<div>No main content found</div>"
    
    # Get the inner HTML of main
    inner_html = "".join(str(item) for item in main_tag.contents)
    
    # Convert HTML attributes to JSX
    jsx = inner_html.replace('class="', 'className="')
    jsx = jsx.replace('for="', 'htmlFor="')
    jsx = jsx.replace('viewbox="', 'viewBox="')
    jsx = jsx.replace('stroke-width="', 'strokeWidth="')
    jsx = jsx.replace('stroke-dasharray="', 'strokeDasharray="')
    jsx = jsx.replace('stroke-linecap="', 'strokeLinecap="')
    jsx = jsx.replace('patternunits="', 'patternUnits="')
    jsx = jsx.replace('fill-rule="', 'fillRule="')
    jsx = jsx.replace('clip-rule="', 'clipRule="')
    jsx = jsx.replace('stroke-linejoin="', 'strokeLinejoin="')
    jsx = jsx.replace('stroke-miterlimit="', 'strokeMiterlimit="')
    
    # Fix self-closing tags not properly closed in str representation (BS4 usually outputs well-formed, but just in case)
    # Re-parse the inner HTML string to xml to ensure self closing tags
    jsx_soup = BeautifulSoup(jsx, "html.parser")
    # For JSX, some things need to be converted like inline styles.
    # We will do a regex replacement for styles if needed, but for now let's hope styles are basic.
    # style="height: 640px;" -> style={{ height: '640px' }}
    def style_replacer(match):
        style_str = match.group(1)
        styles = style_str.split(";")
        dict_styles = []
        for s in styles:
            if ":" not in s: continue
            k, v = s.split(":", 1)
            k = k.strip()
            # camel case key
            parts = k.split("-")
            k_camel = parts[0] + "".join(p.capitalize() for p in parts[1:])
            dict_styles.append(f"{k_camel}: '{v.strip()}'")
        return 'style={{ ' + ", ".join(dict_styles) + ' }}'
    
    jsx_text = str(jsx_soup)
    jsx_text = re.sub(r'style="([^"]*)"', style_replacer, jsx_text)
    
    # Convert SVG tags to camelCase
    jsx_text = jsx_text.replace("<path ", "<path ") # dummy
    
    # Quick fix for inputs without closing slash
    jsx_text = re.sub(r'<input([^>]+)(?<!/)>', r'<input\1 />', jsx_text)
    jsx_text = re.sub(r'<img([^>]+)(?<!/)>', r'<img\1 />', jsx_text)
    jsx_text = re.sub(r'<br([^>]+)(?<!/)>', r'<br\1 />', jsx_text)
    jsx_text = re.sub(r'<hr([^>]+)(?<!/)>', r'<hr\1 />', jsx_text)
    jsx_text = jsx_text.replace('checked=""', 'defaultChecked')
    jsx_text = jsx_text.replace('disabled=""', 'disabled={true}')

    # Remove script tags that might have snuck in
    jsx_text = re.sub(r'<script.*?>.*?</script>', '', jsx_text, flags=re.DOTALL)
    
    # Remove HTML comments since they break JSX
    jsx_text = re.sub(r'<!--(.*?)-->', '', jsx_text, flags=re.DOTALL)
    
    # Fix BS4 lowercasing our react props
    jsx_text = jsx_text.replace('classname=', 'className=')
    jsx_text = jsx_text.replace('htmlfor=', 'htmlFor=')
    jsx_text = jsx_text.replace('viewbox=', 'viewBox=')
    jsx_text = jsx_text.replace('strokewidth=', 'strokeWidth=')
    jsx_text = jsx_text.replace('strokedasharray=', 'strokeDasharray=')
    jsx_text = jsx_text.replace('strokelinecap=', 'strokeLinecap=')
    jsx_text = jsx_text.replace('patternunits=', 'patternUnits=')
    jsx_text = jsx_text.replace('fillrule=', 'fillRule=')
    jsx_text = jsx_text.replace('cliprule=', 'clipRule=')
    jsx_text = jsx_text.replace('strokelinejoin=', 'strokeLinejoin=')
    jsx_text = jsx_text.replace('strokemiterlimit=', 'strokeMiterlimit=')
    
    # SVG Props from console errors
    jsx_text = jsx_text.replace('stop-color=', 'stopColor=')
    jsx_text = jsx_text.replace('stop-opacity=', 'stopOpacity=')
    jsx_text = jsx_text.replace('stroke-opacity=', 'strokeOpacity=')
    jsx_text = jsx_text.replace('fill-opacity=', 'fillOpacity=')
    jsx_text = jsx_text.replace('font-family=', 'fontFamily=')
    jsx_text = jsx_text.replace('font-size=', 'fontSize=')
    jsx_text = jsx_text.replace('font-weight=', 'fontWeight=')
    jsx_text = jsx_text.replace('letter-spacing=', 'letterSpacing=')
    jsx_text = jsx_text.replace('preserveaspectratio=', 'preserveAspectRatio=')
    
    # Also add the missing background map for OceanExplorer explicitly if it's there
    jsx_text = jsx_text.replace('data-location="Arabian Sea, Indian Ocean" style={{  }}', 'data-location="Arabian Sea, Indian Ocean" style={{ backgroundImage: "url(\'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072\')" }}')
    
    # We need to wrap it in a react component
    return jsx_text.strip()

for folder, component_name in PAGES.items():
    html_file = os.path.join(UI_DIR, folder, "code.html")
    if os.path.exists(html_file):
        with open(html_file, "r", encoding="utf-8") as f:
            html_content = f.read()
        
        jsx_content = convert_html_to_jsx(html_content)
        
        tsx_file = os.path.join(FRONTEND_DIR, f"{component_name}.tsx")
        
        # Write the React component
        with open(tsx_file, "w", encoding="utf-8") as f:
            f.write(f"const {component_name} = () => {{\n")
            f.write("  return (\n    <>\n")
            f.write(f"      {jsx_content}\n")
            f.write("    </>\n  );\n")
            f.write("};\n\n")
            f.write(f"export default {component_name};\n")
        
        print(f"Converted {folder} to {component_name}.tsx")
    else:
        print(f"File not found: {html_file}")
