# create flipped versions of an image
from PIL import Image
import os
from matplotlib import pyplot
# load image
for f in os.listdir('.'):
    if f.endswith('.jpg'):
        image=Image.open(f)
# horizontal flip
        fn, fext = os.path.splitext(f)
        hoz_flip = image.transpose(Image.FLIP_LEFT_RIGHT)
        hoz_flip.save('{}_fr{}'.format(fn,fext))
# vertical flip
        ver_flip = image.transpose(Image.FLIP_TOP_BOTTOM)
        ver_flip.save('{}_ftb{}'.format(fn,fext))
#degree flippe
        flip_90=image.rotate(90)
        flip_90.save('{}_r90{}'.format(fn,fext))
        flip_180=image.rotate(180)
        flip_180.save('{}_r180{}'.format(fn,fext))
        flip_270=image.rotate(270)
        flip_270.save('{}_r270{}'.format(fn,fext))
