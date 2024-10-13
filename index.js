
function showNews(blockId)
{
    let blockToShow = document.getElementById(blockId);
    blockToShow.style.display = 'flex';
}

function hideNews(blockId)
{
    let block = document.getElementById(blockId);
    block.style.display = 'none';
}