# 🎯 Day 4 B – Digits & Numbers

## 🧩 Core Concept Focus

* Working with digits using arithmetic operations
* Extracting and analyzing digits using `%` and `/`
* Building logic around numbers and digit patterns
* Using loops and conditional statements for numerical problems
* Strengthening mathematical and logical thinking

---

# 🧠 Questions List

## 1. Split Number into Digits

**Input:**

```text
N = 12345
```

**Output:**

```text
[1, 2, 3, 4, 5]
```

✨ Extract each digit mathematically using `%` and `/`, and return them in an array.

❗ Do not use string operations.

---

## 2. Reverse a Number

**Input:**

```text
N = 1234
```

**Output:**

```text
4321
```

✨ Teaches how to extract and reconstruct digits using `%` and `/`.

---

## 3. Remove the Decimal Point Mathematically

**Input:**

```text
N = 12.34
```

**Output:**

```text
1234
```

✨ Do not use string operations.

---

## 4. Separate Whole and Fractional Parts of a Number

**Input:**

```text
N = 5.75
```

**Output:**

```text
Whole = 5
Fraction = 0.75
```

✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions.

❗ Don't use `Math.trunc()` or `Math.floor()`.

---

## 5. Generate a Decimal Number from Whole and Fractional Digits

**Input:**

```text
Whole = [1, 2]
Fraction = [3, 4]
```

**Output:**

```text
12.34
```

✨ Form the number mathematically by combining the digits from both arrays using powers of 10.

---

## 6. Check if a Number is a Palindrome

**Input:**

```text
N = 121
```

**Output:**

```text
Palindrome
```

✨ Compare the original and reversed numbers to detect symmetry.

---

## 7. Check if a Number is an Armstrong Number (Narcissistic Number)

**Input:**

```text
N = 153
```

**Output:**

```text
Armstrong Number
```

✨ Armstrong Number Examples:

```text
153 = 1³ + 5³ + 3³
1634 = 1⁴ + 6⁴ + 3⁴ + 4⁴
```

---

# 🏠 Homework / Practice Challenge

## 1. Find the Sum of Digits

**Input:**

```text
N = 987
```

**Output:**

```text
24
```

✨ Builds understanding of digit extraction and accumulation.

---

## 2. Find the Average of Digits

**Input:**

```text
N = 4567
```

**Output:**

```text
Average = 5.5
```

✨ Combines digit sum and count for average computation.

---

## 3. Find the Largest and Smallest Digit in a Number

**Input:**

```text
N = 9483
```

**Output:**

```text
Largest = 9
Smallest = 3
```

✨ Enhances comparison logic using loops.

---

## 4. Check if a Number is a Strong Number

**Input:**

```text
N = 145
```

**Output:**

```text
Strong Number
```

✨ Sum the factorial of each digit:

```text
1! + 4! + 5! = 145
```

---

## 5. Check if a Number is an Automorphic Number

**Input:**

```text
N = 25
```

**Output:**

```text
Automorphic Number
```

✨ Because:

```text
25² = 625
```

The square ends with `25`.

---

## 6. Find the Frequency of Each Digit

**Input:**

```text
N = 112233
```

**Output:**

```text
1 → 2
2 → 2
3 → 2
```

✨ Combines loops and conditionals for counting repetitions.

---

## 7. Check if a Number is a Harshad Number

**Input:**

```text
N = 18
```

**Output:**

```text
Harshad Number
```

✨ Because:

```text
1 + 8 = 9
18 ÷ 9 = 2
```

The number is divisible by the sum of its digits.
