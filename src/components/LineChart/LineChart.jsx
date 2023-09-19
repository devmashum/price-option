import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const mathMarks = [
        {
            "id": 1,
            "studentName": "Student 1",
            "mathMarks": 85,
            "physicsMarks": 78,
            "chemistryMarks": 90,
            "biologyMarks": 88
        },
        {
            "id": 2,
            "studentName": "Student 2",
            "mathMarks": 78,
            "physicsMarks": 82,
            "chemistryMarks": 75,
            "biologyMarks": 79
        },
        {
            "id": 3,
            "studentName": "Student 3",
            "mathMarks": 92,
            "physicsMarks": 88,
            "chemistryMarks": 91,
            "biologyMarks": 95
        },
        {
            "id": 4,
            "studentName": "Student 4",
            "mathMarks": 65,
            "physicsMarks": 70,
            "chemistryMarks": 68,
            "biologyMarks": 72
        },
        {
            "id": 5,
            "studentName": "Student 5",
            "mathMarks": 73,
            "physicsMarks": 76,
            "chemistryMarks": 79,
            "biologyMarks": 81
        },
        {
            "id": 6,
            "studentName": "Student 6",
            "mathMarks": 89,
            "physicsMarks": 85,
            "chemistryMarks": 92,
            "biologyMarks": 90
        },
        {
            "id": 7,
            "studentName": "Student 7",
            "mathMarks": 95,
            "physicsMarks": 92,
            "chemistryMarks": 97,
            "biologyMarks": 96
        },
        {
            "id": 8,
            "studentName": "Student 8",
            "mathMarks": 72,
            "physicsMarks": 75,
            "chemistryMarks": 70,
            "biologyMarks": 73
        },
        {
            "id": 9,
            "studentName": "Student 9",
            "mathMarks": 82,
            "physicsMarks": 84,
            "chemistryMarks": 85,
            "biologyMarks": 88
        },
        {
            "id": 10,
            "studentName": "Student 10",
            "mathMarks": 91,
            "physicsMarks": 88,
            "chemistryMarks": 92,
            "biologyMarks": 89
        }
    ]


    return (
        <div>
            <div>
                <LChart width={500} height={400} data={mathMarks}>
                    <Line type="monotone" dataKey="mathMarks" stroke="#8884d8" ></Line>
                    <Line type="monotone" dataKey="physicsMarks" stroke="red" ></Line>
                </LChart>
            </div>
        </div>
    );
};

export default LineChart;