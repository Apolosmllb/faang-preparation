export default function Layout(props: {
  children: React.ReactNode;
  aviones: React.ReactNode;
  carritos: React.ReactNode;
}) {
  return (
    <>
      <nav>SEXO</nav>
      {props.children}
      {props.aviones}
      {props.carritos}
    </>
  );
}
