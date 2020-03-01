# Final-Project
# To build the model we need to create the architecture using Sequential() .
from keras.models import Sequential
from keras.layers import Dense, Flatten, Conv2D, MaxPooling2D
model = Sequential()
# Next we add the first layer, a convolution layer to extract features from the input image, and create 32 5 x 5 ReLu convoluted features also known as feature maps. Since this is the first layer we must input the dimension shape which is a 128 x 128 pixel image with depth = 3 (RGB).
model.add(Conv2D(32, (5, 5), activation='relu', input_shape=(128,128,3)))
# The next layer will be a pooling layer with a 2 x 2 pixel filter to get the max element from the feature maps. This reduces the dimension of the feature maps by half and is also known as sub sampling.
model.add(MaxPooling2D(pool_size=(2, 2)))
# Create one more convolution layer and pooling layer like before, but without the input_shape.
model.add(Conv2D(64, (5, 5), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
# Add a flattening layer, to reduce the image to a linear array also known as a one 1-Dimension vector to feed into and connect with the neural network.
model.add(Flatten())
# Now create a neural network where the first layer has 1000 neurons and the activation function ReLu.
model.add(Dense(1000, activation='relu'))
# Create the last layer of this neural network with 10 neurons (one for each label) using the softmax function.
model.add(Dense(10, activation='softmax'))
