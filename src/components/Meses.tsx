import MesBtn from './MesBtn';

const Meses = () => {
  return (
    <div className="flex">
      <MesBtn monthAgo={-3} />
      <MesBtn monthAgo={-2} />
      <MesBtn monthAgo={-1} />
      <MesBtn monthAgo={0} />
    </div>
  );
};

export default Meses;
