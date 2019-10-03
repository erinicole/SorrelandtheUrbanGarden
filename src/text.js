export const allText = () => {
  const pages = {
    0: {
      text: "TITLE TITLE TITLE",
      page: 0
    },
    1: {
      text: "The sun did not shine. It was too wet to play. So we sat in the",
      page: 1
    },
    2: {
      text:
        "Too wet to go out And too cold to play ball. So we sat in the house.",
      page: 2
    }
  };
  return pages;
};

export const changePage = (pageNum) => {
     pageNum += 1
};
