function trigger(e) {
  e.preventDefault();

  const target = e.target;
  const id = target.getAttribute("href").replace("#", "");
  const element = document.getElementById(id);

  return element?.scrollIntoView({
    behavior: "smooth",
  });
  //
}

export default trigger;
