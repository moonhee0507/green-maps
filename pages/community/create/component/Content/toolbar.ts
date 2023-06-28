const toolbar = {
    options: ['inline', 'blockType', 'fontSize'],
    inline: {
        inDropdown: false,
        options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
    },
    blockType: {
        inDropdown: false,
        options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
    },
    fontSize: {
        options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    },
    image: {
        urlEnabled: true,
        uploadEnabled: true,
        alignmentEnabled: true,
        uploadCallback: undefined,
        previewImage: true,
        inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
        alt: { present: false, mandatory: false },
        defaultSize: {
            height: 'auto',
            width: 'auto',
        },
    },
};

export default toolbar;
