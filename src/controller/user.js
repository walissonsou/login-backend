import { Router } from "express";
import { listUsers, createUser, updateUser, deleteUser } from '../service/user'
const router = Router();

router.get("/", async (req, res) => {
  const listarUsuarios = new listUsers()
  res.send(listarUsuarios);
});


router.post("/",  async (req, res) => {
  const criarUsuario = await createUser(req.body)
  res.status(201).send(criarUsuario)
});

router.put("/:id", async (req,res) => {
  await updateUser(req.id, req.body)
  res.send('Atualizei')
})

router.delete('/:id', async ( req,res) => {
  await deleteUser(req.params.id)
  return res.send('Deletei')
})
export default router;
