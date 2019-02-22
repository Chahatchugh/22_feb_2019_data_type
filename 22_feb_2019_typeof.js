// function check of datatypes

function check_data_type(type)
{
    if(type == null)                                                              //Null check
    {
        console.log("This is a Null")
        console.log(type)
    }
    else if(typeof(type)==="object" && typeof(type[0])!=="object")                //Array check
    {
        console.log("This ia an Array")
        type.map((x,i)=>{
            console.log(x)
        })
    }
    else if(typeof(type)==="object" && typeof(type[0])==="object")               //Array of object check
    {
        console.log("This is an Array of object")
        type.map((x,i)=>{
            console.log(x)
        })
    }
    else if(typeof(type)==="boolean")                                            //Boolean check
    {
        console.log("This is a Boolean")
        console.log(type)
    }
    else if(typeof(type)==="number")                                             //Number check
    {
        console.log("This is a Number")
        console.log(type)
    }
    else if(typeof(type)==="string")                                             //String check
    {
        console.log("This is a String")
        console.log(type)
    }
    else if(typeof(type)==="undefined")                                          //Undefined check
    {
        console.log("This is an Undefined")
        console.log(type)
    }
    else if(typeof(type)==="NaN")                                                //NaN check
    {
        console.log("This is a NaN")
        console.log(type)
    }
    
}

//Inputs of all the check

an_array = [1 , 2 , 3 , 4]
an_array_of_object = [{id:1},{id:2},]
a_boolean_t = true
a_boolean_f = false
a_number = 100
a_string = "22 feb 2019 assignment of data type check"
var an_undefined_value
a_null = null
a_NaN = 1-"a"

//Call for data types check

check_data_type(an_array)
check_data_type(an_array_of_object)
check_data_type(a_boolean_t)
check_data_type(a_boolean_f)
check_data_type(a_number)
check_data_type(a_string)
check_data_type(an_undefined_value)
check_data_type(a_NaN)
check_data_type(a_null)
