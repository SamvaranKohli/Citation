var in_str = " <input type='text' id='no' class='auth_input' style='margin-right: 10px; margin-bottom: 10px;'> <input type='text' id='no2' class='auth_input'> <button class='del_button' id='no3' onclick='delButton(this.id)'>x</button>"

var no = 1;

function delButton(id)
{

    var fid = "fName_" + id;
    var lid = "lName_" + id;

    var myobj = document.getElementById(fid);
    myobj.remove();

    var myobj2 = document.getElementById(lid);
    myobj2.remove();

    var myobj3 = document.getElementById(id);
    myobj3.remove();

    no--;
}

function createNewElement() 
{
    var txtNewInputBox = document.createElement('div');

    txtNewInputBox.innerHTML = in_str;

    document.getElementById("AuthorNames_input").appendChild(txtNewInputBox);
    document.getElementById('no').id = "fName_" + no.toString();
    document.getElementById('no2').id = "lName_" + no.toString();
    document.getElementById('no3').id = no.toString();
    no++;
}

function ordinal_suffix_of(i) 
{
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function check()
{

    var str = "";

    if(no == 1)
    {
        str += document.getElementById("fName_0").value;
        str += " ";
        str += document.getElementById("lName_0").value;
        str += ", ";
    }
    else if(no == 2)
    {
        str += document.getElementById("fName_0").value;
        str += " ";
        str += document.getElementById("lName_0").value;
        str += " and ";

        str += document.getElementById("fName_1").value;
        str += " ";
        str += document.getElementById("lName_1").value;
        str += ", ";
    }
    else
    {
        var str3 = "";

        for(var i = 0; i < no; i++)
        {
            var fn_id = "fName_" + i.toString();
            var ln_id = "lName_" + i.toString();

            str3 += document.getElementById(fn_id).value;
            str3 += " ";
            str3 += document.getElementById(fn_id).value;
            str3 += ", ";
        }

        str += str3;
    }

    var str2 = document.getElementById("title_of_book").value;
    str2 = str2.italics();
    str += str2
    str += " ";

    str += document.getElementById("p.no.").value;
    str += " (";
    str += document.getElementById("Publisher").value;
    str += ", ";
    str += document.getElementById("place_of_publication").value;
    str += ", ";

    if (document.getElementById("edition").value != "")
    {
        str += ordinal_suffix_of(document.getElementById("edition").value);
        str += " edn."
        str += ", ";
    }

    if (document.getElementById("year").value != "")
    {
        str += document.getElementById("year").value;
    }
    
    str += ").";

    document.getElementById("final_text").innerHTML = str;
}

function copy() {

  var copyText = document.getElementById("final_text").value;

  navigator.clipboard.writeText(copyText);
}