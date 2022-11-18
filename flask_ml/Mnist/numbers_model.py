import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
import pickle

mnist = tf.keras.datasets.mnist

(X_train, y_train), (X_test, y_test) = mnist.load_data()


#normalize the pixel values between 0 and 1
X_train = tf.keras.utils.normalize(X_train, axis=1)
X_test = tf.keras.utils.normalize(X_test, axis=1)

print(X_train[0])


# Sequential type of model -- feed forward rep of the image 
model = tf.keras.models.Sequential()

# add Flatten layer type, 
# at the end of the network, there are usually densely connected 
# layers that we need to flatten
model.add(tf.keras.layers.Flatten(input_shape=X_train[0].shape))

#2 hidden layers
#add dense layer with 128 neurons in layer
#activation default
model.add(tf.keras.layers.Dense(128, activation=tf.nn.relu))
model.add(tf.keras.layers.Dense(128, activation=tf.nn.relu))

#final layer has the number of classifications, i.e. 10 in this case
model.add(tf.keras.layers.Dense(10, activation=tf.nn.softmax))


#add parameters for the training of the model
model.compile(optimizer='adam', 
              loss='sparse_categorical_crossentropy',
             metrics = ['accuracy'])

model.fit(X_train, y_train, epochs = 5)

model.save('./numbers_model.model')

val_loss, val_acc = model.evaluate(X_test, y_test)

predictions = model.predict(X_test)

print(predictions)