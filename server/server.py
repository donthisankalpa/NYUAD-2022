from flask import Flask

myapp = Flask(_name_)



@myapp.route('/')
def intro():
    return "Welcome to nurse system"

# @myapp.route('/showMe/TemperatureCondition')
# def perform_analysis():
#     temperature = getTemp()
#     settemp= setTemp()
#     buf = "temperature = %2.2f\n, set temperature = %2.2f\n" % (temperature, settemp)
#     return buf

@myapp.route('/start_qc/<options>')
def action(options):
    o_int = int (options)
    if o_int ==1:
        msg = "constraint = 1"
    elif o_int ==0:
        msg = "constraint = 0"
    return msg

while True:
    if _name_ == "_main_":
        myapp.run(host='0.0.0.0',port=5020,debug=True)