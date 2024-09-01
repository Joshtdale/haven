export default function handler(req: any, res: { setPreviewData: (arg0: {}) => void; redirect: (arg0: string) => void }) {
    res.setPreviewData({})
    res.redirect('/')
}
