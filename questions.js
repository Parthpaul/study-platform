// All your 70 questions organized by chapters
const questionsData = {
    sqlMath: {
        chapterName: "SQL Math Functions",
        questions: [
            {
                id: "sqlMath1",
                question: "What is the POWER() function used for?",
                answer: "It raises a number to a specific power. Example: POWER(2,3) returns 8"
            },
            {
                id: "sqlMath2",
                question: "What does the ROUND() function do?",
                answer: "It rounds a number to the nearest integer or to specified decimal places"
            },
            {
                id: "sqlMath3",
                question: "What is the purpose of MOD() function?",
                answer: "It returns the remainder of a division operation"
            },
            {
                id: "sqlMath4",
                question: "What will SELECT ROUND(15.75, 1); return?",
                answer: "15.8 (rounded to one decimal place)"
            },
            {
                id: "sqlMath5",
                question: "What is the result of POWER(3, 3)?",
                answer: "27 (3 raised to the power of 3)"
            }
        ]
    },
    
    sqlText: {
        chapterName: "SQL Text Functions",
        questions: [
            {
                id: "sqlText1",
                question: "Which functions convert a string to uppercase?",
                answer: "UCASE() or UPPER()"
            },
            {
                id: "sqlText2",
                question: "How do you convert a string to lowercase in SQL?",
                answer: "Using LCASE() or LOWER()"
            },
            {
                id: "sqlText3",
                question: "Which function extracts a substring from a string?",
                answer: "MID(), SUBSTRING(), or SUBSTR()"
            },
            {
                id: "sqlText4",
                question: "How do you find the number of characters in a string?",
                answer: "Using the LENGTH() function"
            },
            {
                id: "sqlText5",
                question: "Which function retrieves characters from the start of a string?",
                answer: "LEFT() function"
            },
            // Add all 10 SQL text functions questions here
        ]
    },
    
    sqlDate: {
        chapterName: "SQL Date Functions",
        questions: [
            {
                id: "sqlDate1",
                question: "Which function returns the current date and time?",
                answer: "NOW()"
            },
            {
                id: "sqlDate2",
                question: "How do you extract the month's name from a date?",
                answer: "Using MONTHNAME() function"
            },
            // Add all 7 date functions questions here
        ]
    },
    
    sqlAggregate: {
        chapterName: "SQL Aggregate Functions",
        questions: [
            {
                id: "sqlAgg1",
                question: "Which function calculates the total of a numeric column?",
                answer: "SUM()"
            },
            {
                id: "sqlAgg2",
                question: "How do you find the highest value in a column?",
                answer: "Using MAX() function"
            },
            // Add all 9 aggregate functions questions here
        ]
    },
    
    sqlGroupBy: {
        chapterName: "GROUP BY, HAVING, ORDER BY",
        questions: [
            {
                id: "sqlGroup1",
                question: "Which clause groups rows with same values?",
                answer: "GROUP BY"
            },
            {
                id: "sqlGroup2",
                question: "What is the purpose of ORDER BY?",
                answer: "It sorts the result set in ascending or descending order"
            },
            // Add all 9 GROUP BY questions here
        ]
    },
    
    societalImpacts: {
        chapterName: "Societal Impacts",
        questions: [
            {
                id: "social1",
                question: "What is a digital footprint?",
                answer: "The trail of data you leave behind when using the internet"
            },
            {
                id: "social2",
                question: "What are net etiquettes?",
                answer: "Basic rules of polite behavior while communicating online"
            },
            {
                id: "social3",
                question: "What is plagiarism?",
                answer: "Using someone else's work without giving credit"
            },
            // Add all 20 societal impacts questions here
        ]
    }
};

// Initialize bookmarks from localStorage
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};