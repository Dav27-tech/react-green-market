# Code Challenge 4: Recreate the Missing Components

---

# Objective

In today's lesson, we built the foundation of the **GreenMarket** landing page using **React.js**, **Bootstrap 5**, and **Bootstrap Icons**.

However, the application is not yet complete.

As a Front-End Developer, one of your most valuable skills is the ability to analyze a design and translate it into working code. In real software development projects, you will often receive a mockup or screenshot from a UI/UX designer instead of detailed implementation instructions.

For this challenge, you will practice that exact workflow.

---

# Scenario

The design team has sent you an image showing the final appearance of the GreenMarket landing page.

Your task is to carefully analyze the image and recreate the missing sections using the React and Bootstrap concepts learned in class.

Unlike previous exercises, you will **not receive the code or detailed implementation steps**. Instead, you must determine which Bootstrap components and utility classes are needed to match the design.

---

# Your Mission

Create the following React components:

- **Products**
- **ProductCard**
- **Benefits**

The components should visually match the design shown in the reference image.

---

# Requirements

## Products Component

Create a section that displays the featured products.

Your implementation should include:

- A section title
- A responsive Bootstrap container
- A Bootstrap Grid layout
- Product cards generated dynamically using `.map()`
- The provided `products.js` data file
- A reusable `ProductCard` component

Each product card should display:

- Product image
- Product name
- Product category
- Product price
- Action button

---

## Benefits Component

Create a section highlighting the advantages of shopping with GreenMarket.

The section should contain:

- A title
- Three responsive Bootstrap Cards
- A Bootstrap Icon on each card
- A heading
- A short description

Choose icons and text that fit the overall theme of the application.

---

# Analyze Before Coding

Before writing any code, study the reference image and identify:

- Which Bootstrap components are being used
- How the layout is organized
- Which Bootstrap Grid classes are required
- Which spacing utilities are applied
- Which typography classes are used
- Which color utilities appear in the design

Planning the structure before coding is an essential professional skill.

---

# Bootstrap Concepts to Practice

Your solution should demonstrate the correct use of:

### Layout

- `container`
- `row`
- `col-md-*`
- `g-*`

### Cards

- `card`
- `card-body`
- `card-img-top`
- `shadow`
- `h-100`

### Typography

- `display-*`
- `fw-bold`
- `lead`
- `text-center`

### Buttons

- `btn`
- `btn-success`
- `btn-outline-success`

### Utilities

- `py-*`
- `mb-*`
- `mt-auto`
- `d-flex`
- `flex-column`
- `w-100`

### Bootstrap Icons

Select icons that best match the design shown in the image.

---

# Learning Objectives

By completing this challenge, you will practice:

- Reading and interpreting a UI design
- Building reusable React components
- Passing data through props
- Rendering lists with `.map()`
- Using Bootstrap's Grid System
- Creating responsive card layouts
- Applying Bootstrap utility classes
- Matching an existing design using Bootstrap

---

# Submission Checklist

Before submitting your project, verify that:

- The **Products** component has been created.
- The **ProductCard** component is reusable.
- Products are rendered dynamically using `.map()`.
- The **Benefits** component has been implemented.
- The layout matches the reference image as closely as possible.
- The page is responsive on different screen sizes.
- All components are correctly imported into `App.jsx`.
- The application runs without errors.

---

# Evaluation Criteria

| Criterion                |  Points |
| ------------------------ | ------: |
| Products component       |      25 |
| ProductCard component    |      20 |
| Benefits component       |      20 |
| Bootstrap implementation |      20 |
| Responsiveness           |      10 |
| Code organization        |       5 |
| **Total**                | **100** |

---

# Professional Tip

Professional developers rarely receive step-by-step instructions for every feature they build. Instead, they are expected to examine design mockups, identify the required components, and implement them using the technologies available.

This challenge is designed to help you develop that mindset by combining **observation, planning, and implementation**—three essential skills for every front-end developer.
