export const allText = () => {
  const pages = {
    0: {
      text: "Garden",
      page: 0
    },
    1: {
      text: "The sun did not shine",
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
