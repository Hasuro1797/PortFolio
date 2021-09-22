import React from 'react';
import { FormattedMessage } from 'react-intl';

const Title = ({ id, text  }) => {
    return (
        <div className="Title">
            <h3>
                <FormattedMessage
                    id={id}
                    defaultMessage={text}
                />
                <span>
                    <FormattedMessage
                        id={id}
                        defaultMessage={text}
                    />
                </span>
            </h3>
        </div>
    )
}

export default Title
