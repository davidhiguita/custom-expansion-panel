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
        const icon = this.props.iconName || 'keyboard_arrow_up';
        return (
            <div className="custom-expansion-panel__expansion-icon">
                <FontIcon onClick={this.toggleExpandedState}>
                    {icon}
                </FontIcon>
            </div>
        );
    }

    renderPrimaryLabel() {
        const { primaryLabel, secondaryLabel } = this.props;
        const classes = classNames(
            'custom-expansion-panel__primary-label',
            { 'custom-expansion-panel__primary-label--full': !!primaryLabel && !secondaryLabel },
        );
        return (
            <div className={classes}>
                {primaryLabel || null}
            </div>
        );
    }

    renderSecondaryLabel() {
        const { secondaryLabel } = this.props;
        const classes = classNames(
            'custom-expansion-panel__secondary-label',
            { 'custom-expansion-panel__secondary-label--exists': !!secondaryLabel }
        );
        return (
            <div className={classes}>
                {secondaryLabel || null}
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
    ]).isRequired,
    iconName: PropTypes.string,
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
    expandIcon: null,
    iconName: '',
    primaryLabel: null,
    secondaryLabel: null
}

export default CustomExpansionPanel;
