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
        const { expandedSecondaryLabel, primaryLabel } = this.props;
        const classes = classNames(
            'custom-expansion-panel__primary-label',
            { 'custom-expansion-panel__primary-label--full': !expandedSecondaryLabel || !this.state.isExpanded },
        );
        return (
            <div className={classes}>
                {primaryLabel || null}
            </div>
        );
    }

    renderSecondaryLabel() {
        const { expandedSecondaryLabel } = this.props;
        const classes = classNames(
            'custom-expansion-panel__secondary-label',
            { 'custom-expansion-panel__secondary-label--show': !expandedSecondaryLabel || this.state.isExpanded }
        );
        return (
            <div className={classes}>
                {this.state.isExpanded && expandedSecondaryLabel}
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
    expandedSecondaryLabel: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ]),
    iconName: PropTypes.string,
    primaryLabel: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ])
};

CustomExpansionPanel.defaultProps = {
    expandIcon: null,
    expandedSecondaryLabel: null,
    iconName: '',
    primaryLabel: null,
}

export default CustomExpansionPanel;
