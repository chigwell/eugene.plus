export const BoxIcon = ({ label, url: initialUrl, className }) => {
    const WORDS_TO_REPLACE = ['mailto:', 'tel:'];
    let dataPrint = WORDS_TO_REPLACE.reduce((acc, word) => acc.replace(word, ''), initialUrl);

    return <a href={initialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title={label}
        aria-label={label}
        data-print={dataPrint}>
        <i className={`bx ${className} social__icon`} />
    </a>
};
