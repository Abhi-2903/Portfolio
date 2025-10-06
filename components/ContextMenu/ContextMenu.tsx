import styles from "./ContextMenu.module.css";

interface Props {
  x: number;
  y: number;
  visible: boolean;
  onClose: () => void;
}

const ContextMenu = ({ x, y, visible, onClose }: Props) => {
  if (!visible) return null;

  return (
    <ul className={styles["context-menu"]} style={{ top: y, left: x }}>
      <li>View</li>
      <li>Sort by</li>
      <li onClick={() => window.location.reload()}>Refresh</li>
      <li>
        New <span className={styles.arrow}>➜</span>
        <ul className={styles.submenu}>
          <li>Folder</li>
          <li>Shortcut</li>
          <li>Text Document</li>
        </ul>
      </li>
      <li>Properties</li>
    </ul>
  );
};

export default ContextMenu;
