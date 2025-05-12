import React from 'react';

const FindCourse = () => {
  return (
    <div className="find-course-container" style={containerStyle}>
      <iframe 
        src="https://careertest.edumilestones.com/india-admission/colleges/MzcxNQ=="
        title="Course Finder"
        style={iframeStyle}
        allowFullScreen
      ></iframe>
    </div>
  );
}

// CSS Styles (Inline for simplicity, or move to a CSS file)
const containerStyle = {
  position: 'fixed',  // Takes it out of normal document flow
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100vw',     // 100% of viewport width
  height: '100vh',    // 100% of viewport height
  overflow: 'hidden', // Prevents scrollbars
  margin: 0,
  padding: 0,
  border: 'none',
};

const iframeStyle = {
  width: '100%',
  height: '100%',
  border: 'none',
  display: 'block',   // Removes extra spacing below iframe
  margin: 0,
  padding: 0,
};

export default FindCourse;