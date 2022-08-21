function na() {
    alert("Are you checked?");
    var numbers = document.getElementById('howmuch2').value;
    txtDatas = document.getElementById('txt_data2').value.replace(/\r?\n/g, '%0D%0A');
    student_number = document.getElementById('your_address').value;
    student_name = document.getElementById('your_name').value;
    uec_domain = '@edu.cc.uec.ac.jp';
    student_address = student_number + uec_domain;
    student_number = student_number.slice(1);
    teacher_address = 'nu2analysis@mt.mce.uec.ac.jp';
    private_address = document.getElementById('bcc').value;
    subjects = numbers + ' ' + student_number + ' ' + student_name;
    bodys = student_number + student_name + '%0D%0A' + '%0D%0A' + txtDatas;
    location.href = 'mailto:' + teacher_address + '?cc=' + student_address + '&bcc=' + private_address + '&subject=' + subjects + '&body=' + bodys;
	e.preventDefault();
	location.href = 'https://google.com'
    alert("Re-Directing?");
};

function na_handin() {
    alert("Are you checked?");
    var numbers = document.getElementById('howmuch3').value;
    txtDatas = document.getElementById('txt_data3').value.replace(/\r?\n/g, '%0D%0A');
    student_number = document.getElementById('your_address').value;
    student_name = document.getElementById('your_name').value;
    var version = document.getElementById('hand_in').value;
    uec_domain = '@edu.cc.uec.ac.jp';
    student_address = student_number + uec_domain;
    student_number = student_number.slice(1);
    teacher_address = 'nu2analysis@mt.mce.uec.ac.jp';
    private_address = document.getElementById('bcc').value;
    subjects = numbers + version + ' ' + student_number + ' ' + student_name;
    bodys = student_number + student_name + '%0D%0A' + '%0D%0A' + txtDatas;
    location.href = 'mailto:' + teacher_address + '?cc=' + student_address + '&bcc=' + private_address + '&subject=' + subjects + '&body=' + bodys;
    alert("Re-Directing?");
};