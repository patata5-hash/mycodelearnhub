export function toggleBookmark(tutorialId) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  
    if (bookmarks.includes(tutorialId)) {
      bookmarks = bookmarks.filter(id => id !== tutorialId);
    } else {
      bookmarks.push(tutorialId);
    }
  
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  