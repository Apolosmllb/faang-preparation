export default function Layout(props: {
  children: React.ReactNode;
  aviones: React.ReactNode;
  carritos: React.ReactNode;
}) {
  const shoudlRender = true;

  return (
    <>
     
      {props.children}
      {props.aviones}
      {shoudlRender && props.carritos}
    </>
  );
}
