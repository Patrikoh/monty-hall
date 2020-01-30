export const setBackgroundColor = props => {
    const {isOpen, hasCar, isSelected, theme} = props;
    let color = theme.primary;
    if (isSelected) {
        color = theme.highlight;
    }
    if (isOpen) {
        if (hasCar) {
            color = theme.success;
        } else {
            color = theme.failure;
        }
    }
    return color;
};
