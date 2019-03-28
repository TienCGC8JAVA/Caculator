// alert(); hiển thị trên ô xổ xuống trong trang
function addition()
{
    let Add = parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value);
    alert("Tổng của 2 số là: " + Add);
}

// document.write(); hiển thị trên trang mới đè lên trang cũ
function subtraction()
{
    let Sub = parseInt(document.getElementById("num1").value) - parseInt(document.getElementById("num2").value);
    document.write("Hiệu của 2 số là:" + Sub);
}

// console.log(); hiển thị trên console mà không hiển thị trên giao diện người dùng
function multiplication()
{
    let Mul = parseInt(document.getElementById("num1").value) * parseInt(document.getElementById("num2").value);
    console.log("Tích của 2 số là: " + Mul);
}

// document.getElementById().innerHTML = ' ' + ... ; hiển thị thay đổi trên thẻ id cần thực thi và xóa content cũ trong thẻ
function division()
{
    let Div = parseInt(document.getElementById("num1").value) / parseInt(document.getElementById("num2").value);
    document.getElementById("btn").innerHTML = "<br />" + "<br />" + " Thương của 2 số là: " + Div;
}