'use client';
import { useDialog } from "./providers";

 
interface Props {
  
  onClose: () => void;
  
}

export default function CenterWithActionDialog(prop: Props) {
    // const router = useRouter()
    //  const [open, setOpen] = useState(false);
    const { open, openDialog, closeDialog} = useDialog();
     
    
  return (
    <div>
       
        {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold">Dialog Title</h2>
            <p className="mt-2">This is a dialog with some content.</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => closeDialog}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                onClick={() => {
                  prop.onClose()
                  closeDialog()
                //   router.back();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
    
  );
}   