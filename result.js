document.getElementById('btn-result').addEventListener('click', function(){
    // printing name
    const nameField = document.getElementById('name-field');
    const name = nameField.value;

    const reportName = document.getElementById('report-name');
    reportName.value = name;
    
    // printing class
    const classField = document.getElementById('class-field');
    const Class = classField.value;

    const reportClass = document.getElementById('report-class');
    reportClass.value = Class;

    // printing Result
    const englishResultField = document.getElementById('english');
    const englishResult = parseFloat(englishResultField.value);
 
    const banglaResultField = document.getElementById('bangla');
    const banglaResult = parseFloat(banglaResultField.value);

    const mathResultField = document.getElementById('math');
    const mathResult = parseFloat(mathResultField.value);

    const scienceResultField = document.getElementById('science');
    const scienceResult = parseFloat(scienceResultField.value);

    function totalMarks(englishResult,banglaResult,mathResult,scienceResult){
        return englishResult + banglaResult + mathResult + scienceResult;

    }

    const totalMarksReport = document.getElementById('total-marks');
    totalMarksReport.value = totalMarks(englishResult,banglaResult,mathResult,scienceResult);

    function averageMarks(englishResult,banglaResult,mathResult,scienceResult){
        const totalMark = englishResult + banglaResult + mathResult + scienceResult;
        return totalMark / 4;
    }

    const average = document.getElementById('average-marks');
    average.value = averageMarks(englishResult,banglaResult,mathResult,scienceResult);

    function grade(marks){
        if(marks>=80 && marks<=100){
            return 4.00;
        }
        else if(marks>=70 && marks<80){
            return 3.50;
        }
        else if(marks>=60 && marks<70){
            return 3.00;
        }
        else if(marks>=50 && marks<60){
            return 2.50;
        }
        else if(marks>=40 && marks<50){
            return 2.00;
        }
        else if(marks>=0 && marks<33){
            return 00;
        }
    }

    function gradePoint(englishResult,banglaResult,mathResult,scienceResult){
        
        const englishGrade = parseFloat(grade(englishResult));
        const banglaGrade = parseFloat(grade(banglaResult));
        const mathGrade = parseFloat(grade(mathResult));
        const scienceGrade = parseFloat(grade(scienceResult));

        const TotalMark = englishGrade + banglaGrade + mathGrade + scienceGrade;
        const totalGrade = TotalMark / 4;
        return totalGrade;
    }

    const finalGrade = document.getElementById('grade-field');
    finalGrade.value = gradePoint(englishResult,banglaResult,mathResult,scienceResult);

    const remarkField = document.getElementById('remark-field');
    const remarkFieldElement = remark(finalGrade.value);
    remarkField.value = remarkFieldElement;


    function remark(finalGrade){
        if(finalGrade == 4){
            return 'Excellent';
        }
        else if(finalGrade >=3.5 && finalGrade < 4){
            return 'Good';
        }
        else if(finalGrade >=3 && finalGrade < 3.5){
            return 'Need to work hard';
        }
        else if(finalGrade >=2 && finalGrade < 3){
            return 'Very Poor';
        }
        else if(finalGrade >= 0 && finalGrade < 2){
            return 'Better luck next time';
        }
        else{
            return 'false';
        }
    }

})