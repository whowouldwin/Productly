window.onload = function () {
    //tags
    addTagsClickHandler();

}
const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (event) => {
        if (event.target.classList.contains('tag')) {
            let clickedTag = event.target;
            removeSelectedTag();
            selectClickedTag(clickedTag);
        }
    })
}
const removeSelectedTag = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    console.log(tags);
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
};
const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
};


