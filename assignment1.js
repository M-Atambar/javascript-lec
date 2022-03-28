function checkammount()
{
    let amt = document.querySelector('input').value;
    let a1= parseInt(amt)

    // console.log(a1);
    // document.write(a1);
    if(a1 >= 5000)
    {
        document.write("You have got discount of 30% <br>"); 
        discount = a1*30/100;
        total_discount = a1 - discount;
        console.log("Discount of 30% is ", total_discount);
        document.write("Your final price is ", total_discount);
    }
    else if(a1 >= 3000 && a1 < 5000)
    {
        document.write("You have got discount of 25% <br>"); 
        discount = a1*25/100;
        total_discount = a1 - discount;
        document.write("Your final price is ", total_discount);
    }
    else if(a1 >= 1000 && a1 < 3000)
    {
        document.write("You have got discount of 15% <br>"); 
        discount = a1*15/100;
        total_discount = a1 - discount;
        document.write("Your final price is ", total_discount);
    }
    else if(a1 > 0 && a1 < 1000)
    {
        document.write("No discount");
    }
}
