import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import { MenuItemList } from '../CardsList/Card/MenuCard/MenuItemsList';
import { Text, EColor } from '../Text';
import classNames from 'classnames';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
  onOpen?: ()=> void;
  onClose?: ()=> void;
}

const NOOP = () => {};

export function Dropdown({button, isOpen,  onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
  const [isDpopdonwOpen, setIsDropdownOpen] = React.useState(isOpen)
  React.useEffect(()=> setIsDropdownOpen(isOpen), [isOpen] )
  React.useEffect(()=> isDpopdonwOpen ? onOpen : onClose,[isDpopdonwOpen])
  const ref = useRef<HTMLDivElement>(null)
  const rect = ref.current?.getBoundingClientRect();
  const node = document.querySelector('#modal_root');
  if(!node) return null


  const  handleOpen = () => {
    if(isOpen === undefined) {
      setIsDropdownOpen(!isDpopdonwOpen)
    }

  }
 
  return (
    <div className={styles.container} ref={ref}>
      <div onClick= {handleOpen} >
        {button}
      </div>
      {isDpopdonwOpen && (
        ReactDOM.createPortal((
          <div className={styles.listContainer}>
          <div onClick={()=> setIsDropdownOpen(false)} className={styles.list}>
            <div className={styles.dropdown} style={{
              top: Math.round(rect? rect.top + rect?.height * 1.5: 0),
              left: Math.round(rect? rect.left - rect.width * 2: 0)
            }}>
              <MenuItemList postId='1234'/>
              <button className={classNames(styles.closeButton, styles.hide)}>
                <Text size={14} modileSize={12} color={EColor.grey99}>Закрыть</Text>
              </button>
            </div>
          </div>
        </div>
        ), node)
      )} 
    </div>
  );
}
