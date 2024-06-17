const section = document.querySelectorAll(".section");
function interSection() {
  const obsSection = new IntersectionObserver(
    function (entries, observer) {
      const [ent] = entries;
      if (!ent.isIntersecting) return;
      if (ent.isIntersecting === true) {
        ent.target.classList.remove("section--hidden");
      }
      observer.unobserve(ent.target);
    },
    {
      root: null,
      threshold: 0.1,
    },
  );
  section.forEach((entries) => {
    obsSection.observe(entries), entries.classList.add("section--hidden");
  });

  return obsSection;
}

export default interSection;
