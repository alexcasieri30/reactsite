import pickle
import pandas as pd

features_list = ["Female","Male","FamSmall","FamMedium","FamLarge",
                 "Child","Young_adult","Middle_age","Old_age","CabinVarA","CabinVarB","CabinVarC",
                 "CabinVarD","CabinVarE","CabinVarF","CabinVarG","TicketNum1","TicketNum2",
                 "TicketNum3","TicketNum4","Port_S","Port_C","Port_Q","Fare_small","Fare_medium",
                "Fare_large","Fare_xl","pclass1","pclass2","pclass3"]

# print(altered_test.iloc[0])


def handle_pclass(pclass):
    l = [0]*3
    if not pclass:
        return l
    l[pclass-1] = 1
    return l

def handle_sex(sex):
    return [0,1] if sex == "male" else [1,0]
    

def handle_age(age):
    l = [0,0,0,0]
    if not age:
        return l
    if (age <= 18):
        l[0] = 1
    elif age <= 40:
        l[1] = 1
    elif age <= 60:
        l[2] = 1
    else:
        l[3] = 1
    return l

def handle_family(family):
    l = [0] * 3
    if not family:
        return l
    if family <= 2:
        l[0] = 1
    elif family <= 5:
        l[1] = 1
    else:
        l[2] = 1
    return l

def handle_fare(fare):
    l = [0] * 4
    if not fare:
        return l
    if fare <= 128:
        l[0] = 1
    elif fare <= 256:
        l[1] = 1
    elif fare <= 384:
        l[2] = 1
    else:
        l[3] = 1
    return l

def handle_cabin(cabin):
    l = [0] * 7
    if not cabin or not cabin=="nan":
        return l
    cabin_dict = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6}
    l[cabin_dict[cabin]] = 1
    return l

def handle_port(port):
    if not port:
        return l
    l = [0] * 3
    port_dict = {"S":0, "C":1, "Q":2}
    l[port_dict[port]] = 1
    return l

def handle_ticketnum(ticket):
    l = [0] * 4
    if not ticket or not ticket[0].isnumeric():
        return l
    if int(ticket[0]) >= 4:
        l[3] = 1
        return l
    l[int(ticket[0])-1] = 1
    return l

def handle_all_data(data):
    try:
        res = []
        res.extend(handle_sex(data[0]))
        res.extend(handle_family(data[1]))
        res.extend(handle_age(data[2]))
        res.extend(handle_cabin(data[3]))
        res.extend(handle_ticketnum(data[4]))
        res.extend(handle_port(data[5]))
        res.extend(handle_fare(data[6]))
        res.extend(handle_pclass(data[7]))
        return [res]
    except Exception as e:
        print("ERROR: ", e)

# pclass = 3
# sex = "male"
# age = 22
# family = 1
# fare = 7.25
# cabin = None;
# port = "S"
# ticketNum = "A/5 21171"
# data = [pclass, sex, age, family, fare, cabin, port, ticketNum]
