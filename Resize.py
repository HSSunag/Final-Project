from PIL import Image
import os

new_width  = 300
new_height = 300

for f in os.listdir('.'):
    if f.endswith('.jpg'):
        i=Image.open(f)
        fn, fext = os.path.splitext(f)
        img = i.resize((new_width, new_height), Image.ANTIALIAS)
        img.save('F:\8th sem\Project\Dataset\Category 1\Agumented1\{}_300{}'.format(fn,fext))

