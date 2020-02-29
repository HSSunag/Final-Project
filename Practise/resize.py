from PIL import Image
import os

size_300 = (300,300)

for f in os.listdir('.'):
    if f.endswith('.jpg'):
        i=Image.open(f)
        fn, fext = os.path.splitext(f)

        i.thumbnail(size_300)
        i.save('{}_300{}'.format(fn,fext))
