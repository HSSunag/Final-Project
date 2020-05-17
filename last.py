import keras
import sys
import numpy as np
from keras.models import load_model


argumentList = sys.argv
img = keras.preprocessing.image.load_img(sys.argv[1], target_size=(32, 32))
img_array = keras.preprocessing.image.img_to_array(img)
img_array = img_array/255.0
img = np.expand_dims(img_array, axis = 0)
model=load_model('final.h5')
a = model.predict_classes(img)
print(a[0])
