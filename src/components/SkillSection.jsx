import React from 'react';

const SkillSection = ({ skill, progress }) => {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">
                    {skill}
                </h5>
                <div className="skill-bar">
                    <p className="skill-text">
                        {progress}
                    </p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-progress" style={{width:progress}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSection
