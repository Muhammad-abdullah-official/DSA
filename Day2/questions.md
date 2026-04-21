# 🎯 Day 2 – Conditions & Logic

## 🧩 Core Concept Focus
- Conditional statements (`if`, `else if`, `else`)
- Comparison and logical operators
- Decision making based on different inputs
- Strengthening flow-of-control understanding

---

## 🧠 Questions List

### **Q1. Find the Maximum of Three Numbers**
**Input:**  
`10 20 5`  

**Output:**  
`20`  

✨ Teaches nested or chained conditional logic and comparative reasoning.

---

### **Q2. Check if a Number is Positive, Negative, or Zero**
**Input:**  
`-9`  

**Output:**  
`Negative`  

✨ Practices multi-branch conditions and comparison operators.

---

### **Q3. Calculate Electricity Bill (Pakistan Context)**
**Input:**  
`Units = 230`  

**Output:**  
`Total Bill = Rs. 1500`  

✨ Applies multiple ranges using chained `else if` and cumulative logic.

**Example Logic:**
- 0–100 units → Rs. 15 per unit  
- 101–200 units → Rs. 20 per unit  
- 201–300 units → Rs. 30 per unit  
- Above 300 units → Rs. 40 per unit  

🔍 Teaches: cumulative calculation + condition chaining.

---

### **Q4. Check if a Character is a Vowel or Consonant**
**Input:**  
`e`  

**Output:**  
`Vowel`  

✨ Combines logical OR (`||`) operator and string comparisons.

---

### **Q5. Check if a Year is a Leap Year**
**Input:**  
`2024`  

**Output:**  
`Leap Year`  

✨ Builds compound condition logic using multiple conditions (`%4`, `%100`, `%400`).

**Rules:**
- Divisible by 4 → `year % 4 === 0`
- Not divisible by 100 → `year % 100 !== 0`
- Unless divisible by 400 → `year % 400 === 0`

**🧩 In Simple Words:**
- If divisible by 4 → Leap Year  
- If divisible by 100 → Not a Leap Year  
- If divisible by 400 → Leap Year again  

---

## 🏠 Homework / Practice Challenge

### **Q6. Check if a Character is Uppercase, Lowercase, Digit, or Special Character**
**Input:**  
`A`  

**Output:**  
`Uppercase Letter`  

✨ Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.  

🔍 Concepts: ASCII range checks, compound `&&` and `||` operators.

---

### **Q7. Check Triangle Type Using Sides and Angles**
**Input:**  
`Sides = 3, 4, 5`  

**Output:**  
`Right-Angled Triangle`  

✨ Combines geometric reasoning + Pythagoras theorem.

**Example Logic:**
- If `a² + b² = c²` → Right-angled  
- Else if all sides equal → Equilateral  
- Else if any two equal → Isosceles  
- Else → Scalene  

---

### **Q8. Calculate Income Tax Based on Slabs (Pakistan Context)**
**Input:**  
`Income = Rs. 750,000`  

**Output:**  
`Tax = Rs. 62,500`  

✨ Applies progressive slab logic similar to electricity bill.

**Example Slabs (simplified for practice):**
- Up to Rs. 600,000 → No tax  
- Rs. 600,001 – Rs. 1,200,000 → 5%  
- Rs. 1,200,001 – Rs. 2,400,000 → 15%  
- Above Rs. 2,400,000 → 25%  

🔍 Requires cumulative calculation using nested `if–else` or slab logic.