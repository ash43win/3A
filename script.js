const students = [];

document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const id = document.getElementById('studentId').value.trim();
    const name = document.getElementById('studentName').value.trim();
    const age = parseInt(document.getElementById('studentAge').value);

    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = ''; 

    if (!id || !name || !age || age < 0) {
        errorMessage.textContent = 'Invalid input. Please enter a valid ID, name, and a positive age.';
        return;
    }

    const existingStudent = students.some(student => student.id === id);
    if (existingStudent) {
        errorMessage.textContent = `Student with ID ${id} already exists.`;
        return;
    }

    const student = { id, name, age };
    students.push(student);
    displayStudents();
});

function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`;
        studentList.appendChild(li);
    });
}
