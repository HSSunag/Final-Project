from PIL import Image
import os
import	numpy  as  np
import	cv2
from	matplotlib  import pyplot  as	plt

for f in os.listdir('.'):
    if f.endswith('.jpg'):
        img  =	cv2.imread(f)
        mask =	np.zeros(img.shape[:2],np.uint8)
        fn, fext = os.path.splitext(f)

        bgdModel =  np.zeros((1,65),np.float64)
        fgdModel =  np.zeros((1,65),np.float64)

        rect =	(50,50,180,170)
        cv2.grabCut(img,mask,rect,bgdModel,fgdModel,5,cv2.GC_INIT_WITH_RECT)

        mask2  =  np.where((mask==2)|(mask==0),0,1).astype('uint8')
        img  =	img*mask2[:,:,np.newaxis]
        im = Image.fromarray(img)
        im.save('F:\8th sem\Project\Dataset\Category 1\Agumented1\Extract1\{}_C300{}'.format(fn,fext))
