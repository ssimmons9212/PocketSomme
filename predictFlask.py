import pickle 
from sklearn.ensemble import RandomForestClassifier



model  = pickle.load(open('finalized_model.sav', 'rb'))
def ColorPredict(nutr):
    x_test = nutr
    colorP = model.predict(nutr)    
    return colorP[0]

# z = [[105. , 196. ,  17.9, 144. ,   12. ,  20.9]]
# zP = ColorPredict(z)
# #zP = [z]
# print(zP)