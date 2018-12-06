import React from 'react';
import { FonIcon, FontIcon } from 'react-md';

import CustomExpansionPanel from '../../components/custom-expansion-panel';

const content = (
    <div style={{ padding: '20px', textAlign: "justify" }}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
    </div>
);

const primaryLabel = (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div>Label 1</div>
        <div>Label 2</div>
        <div>Label 3</div>
        <div>Label 4</div>
    </div>
);

const secondaryLabel = (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', 'justifyContent': 'center' }}>
        Secondary
    </div>
);

const CustomExpansionPanelContainer = () => (
    <CustomExpansionPanel
        content={content}
        iconName="map"
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
    />
);

export default CustomExpansionPanelContainer;
