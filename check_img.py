import urllib.request
from collections import Counter
import io

try:
    from PIL import Image
    
    url = "https://i.imgur.com/lvxcasZ.png"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req)
    img = Image.open(io.BytesIO(response.read()))
    img = img.convert("RGBA")
    
    pixels = img.getdata()
    valid_pixels = []
    
    for r, g, b, a in pixels:
        if a > 50:
            if not (r > 240 and g > 240 and b > 240) and not (r < 15 and g < 15 and b < 15):
                valid_pixels.append((r, g, b))
                
    counts = Counter(valid_pixels)
    for color, count in counts.most_common(10):
        print(f"RGB: {color} - Hex: #{color[0]:02x}{color[1]:02x}{color[2]:02x} - Count: {count}")
        
except Exception as e:
    print(f"Error: {e}")
