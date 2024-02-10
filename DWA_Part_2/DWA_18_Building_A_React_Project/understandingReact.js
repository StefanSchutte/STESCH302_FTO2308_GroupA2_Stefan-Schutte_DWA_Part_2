const Button = (props) => {
    const { disabled } = props

    if (disabled) return null
    return <div>xxx</div>
}
<div>
    <Button disabled />
</div>

const VideoList = ({ videos }) => {
    const list = []

    for (const single of videos){
        list.push(<li>{single}</li>)
    }
    return <div>{list}</div>
}


const VideoList = ({ videos }) =>
    <div>[videos.map(single => <li>{single}</li></div>

/*
- **Exploration of React Development**:
  - Recent exploration into React development methodologies, involving experimentation with new approaches to tasks such as array manipulation within React applications.
  - Adapting to changes in coding practices and paradigms, with a focus on functional programming concepts and their implementation within React codebases.

- **Syntactical Differences and Functional Programming**:
  - Detailed examination of the syntactical disparities between traditional JavaScript coding practices and functional programming paradigms adopted in React development.
  - Personal reflection on the challenges encountered in transitioning from imperative programming styles to functional programming approaches within React applications.

- **Learning Curve of Functional Programming**:
  - In-depth discussion on the learning curve associated with embracing functional programming principles within the context of React development.
  - Acknowledgment of the initial difficulties experienced while grasping functional programming concepts and their practical application in React projects.

- **Expressiveness of Functional Programming**:
  - Deliberation on the enhanced expressiveness and code clarity achieved through mastery of functional programming techniques in React.
  - Anticipation of improved code readability and maintainability as proficiency in functional programming methodologies grows over time.

- **Teaching Focus: JavaScript and Documentation**:
  - Explicit emphasis on the importance of acquiring a comprehensive understanding of JavaScript fundamentals as a prerequisite for effective React development.
  - Strategic focus on teaching learners how to navigate and comprehend React documentation to foster self-sufficiency and problem-solving skills.

- **Goal-oriented Teaching Approach**:
  - Clear articulation of the pedagogical objective to equip learners with the requisite skills to independently grasp React and other related frameworks.
  - Conceptualization of React proficiency as an outcome of mastering JavaScript fundamentals and adeptness in interpreting technical documentation.

- **Introduction to React Documentation**:
  - Methodical approach towards introducing learners to the React documentation, with an intention to gradually acquaint them with its intricacies and functionalities.

- **Understanding React Fundamentals**:
  - Comprehensive overview of React's capabilities in building dynamic user interfaces, encompassing both web-based and native applications.
  - Emphasis on components as the foundational units of React applications, responsible for encapsulating UI elements and behavior.

- **Component Declaration and Usage**:
  - Detailed elucidation of the process involved in declaring and utilizing components within React applications, including practical examples and best practices.
  - Emphasis on the integration of JavaScript fundamentals with React-specific syntax and conventions to optimize component development.

- **Conditional Rendering and JSX Syntax**:
  - Thorough examination of conditional rendering techniques and the utilization of JSX syntax for declarative UI development in React.
  - Illustrative examples demonstrating the seamless integration of JavaScript logic and JSX markup within React components.

- **Importance of JavaScript Fundamentals**:
  - Strategic emphasis on the foundational role played by JavaScript proficiency in facilitating effective React development, encompassing concepts such as data manipulation, control flow, and scope.
  - Recognition of JavaScript's integral role in enabling React's functionality and facilitating the implementation of complex application logic within React components.

- **JSX Syntax vs. Templating Languages**:
  - Detailed comparison between JSX syntax, a JavaScript-based extension for XML-like markup, and traditional templating languages utilized in web development.
  - Exploration of JSX's inherent flexibility and composability, contrasting it with the string-based syntax and limited functionality characteristic of conventional templating approaches.

- **Overview of Meta-Frameworks**:
  - Comprehensive overview of meta-frameworks such as Next.js and Gatsby, highlighting their role in extending React's capabilities and simplifying common development tasks.
  - Explanation of meta-frameworks' functionalities, including server-side rendering, static site generation, and seamless data fetching, within the context of React-based application development.

- **Recognition of React's Popularity**:
  - Acknowledgment of React's widespread adoption and popularity within the software development community, underscored by its versatility and scalability across various application domains.
 */