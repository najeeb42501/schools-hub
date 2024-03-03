export function UserElement({ children, user }) {
  if (user.type === "user" || user.type === "admin") {
    return <>{children}</>;
  } else {
    return <div>You do not have acces to page</div>;
  }
}

export function SchoolElement({ children, user }) {
  if (user.type === "school") {
    return <>{children}</>;
  } else {
    return <div>You do not have acces to page</div>;
  }
}

export function AdminElement({ children, user }) {
  if (user.type === "admin") {
    return <>{children}</>;
  } else {
    return <div>You do not have acces to page</div>;
  }
}
