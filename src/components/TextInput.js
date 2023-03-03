function TextInput({ label, id, ...rest }) {
  return (
    <div className="space-y-2">
      <label for={id}>{label}</label>
      <input {...rest} />
    </div>
  );
}
export default TextInput;
