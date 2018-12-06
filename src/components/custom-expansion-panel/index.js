import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { FontIcon, Paper } from "react-md";

import "./style.scss";

class CustomExpansionPanel extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.renderContent = this.renderContent.bind(this);
        this.renderExpansionIcon = this.renderExpansionIcon.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderPrimaryLabel = this.renderPrimaryLabel.bind(this);
        this.renderSecondaryLabel = this.renderSecondaryLabel.bind(this);
        this.toggleExpandedState = this.toggleExpandedState.bind(this);
    }

    toggleExpandedState() {
        this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
    }

    renderContent() {
        return (
            <div className="custom-expansion-panel__content">
                {this.props.content}
            </div>
        );
    }

    renderExpansionIcon() {
        return (
            <div className="custom-expansion-panel__expansion-icon">
            <FontIcon onClick={this.toggleExpandedState}>
                keyboard_arrow_up
            </FontIcon>
            </div>
        );
    }

    renderPrimaryLabel() {
        return (
        <div className="custom-expansion-panel__primary-label">
            {this.props.primaryLabel || null}
        </div>
        );
    }

    renderSecondaryLabel() {
        return (
            <div className="custom-expansion-panel__secondary-label">
                {this.props.secondaryLabel || null}
            </div>
        );
    }

    renderHeader() {
        return (
        <div className="custom-expansion-panel__header">
            {this.renderPrimaryLabel()}
            {this.renderSecondaryLabel()}
            {this.renderExpansionIcon()}
        </div>
        );
    }

    render() {
        // const {} = props;
        const { isExpanded } = this.state;

        const classes = classNames(
            'custom-expansion-panel',
            { 'custom-expansion-panel--expanded': isExpanded },
            { 'custom-expansion-panel--contracted': !isExpanded }
        );

        return (
        <Paper className={classes} zDepth={3}>
            {this.renderHeader()}
            {this.renderContent()}
        </Paper>
        );
    }
}

CustomExpansionPanel.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ]),
    primaryLabel: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ]),
    secondaryLabel: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ]),
};

CustomExpansionPanel.defaultProps = {
    primaryLabel: null,
    secondaryLabel: null
}

export default CustomExpansionPanel;
