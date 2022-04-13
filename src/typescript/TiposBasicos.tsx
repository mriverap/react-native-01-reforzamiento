export const TiposBasicos = () => {
  const nombre: string = 'Monica';
  const edad: number = 45;
  const estaActivo: boolean = true;
  const poderes: string[] = ['Velocidad','Volar', "Respirar en el agua"];
  
  return (
    <>
    <h3>Tipos Basicos</h3>
    {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
    <br/>
    { poderes.join(', ')}
    </>
  )
}
